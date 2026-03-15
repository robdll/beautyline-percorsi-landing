import type { APIRoute } from "astro";
import { Resend } from "resend";

const destinationEmail = "info@beautylineprofessional.com";
const fromEmail = "Percorsi Master <noreply@robdll.com>";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ message: "RESEND_API_KEY non configurata sul server." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const formData = await request.formData();
  const nome = String(formData.get("nome") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const messaggio = String(formData.get("messaggio") ?? "").trim();
  const privacyAccepted = formData.get("privacy") !== null;

  if (!nome || !email || !telefono || !messaggio || !privacyAccepted) {
    return new Response(
      JSON.stringify({
        message: "Compila tutti i campi e accetta la privacy.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const resend = new Resend(apiKey);
  const subject = `Nuova richiesta Percorsi Master - ${nome}`;
  const text = [
    "Nuovo lead da percorsi-landing",
    "",
    `Nome: ${nome}`,
    `Email: ${email}`,
    `Telefono: ${telefono}`,
    "",
    "Messaggio:",
    messaggio,
  ].join("\n");

  const html = `
    <h2>Nuovo lead da percorsi-landing</h2>
    <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefono:</strong> ${escapeHtml(telefono)}</p>
    <p><strong>Messaggio:</strong></p>
    <p>${escapeHtml(messaggio).replace(/\n/g, "<br />")}</p>
  `;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [destinationEmail],
    subject,
    text,
    html,
    replyTo: email,
  });

  if (error) {
    return new Response(
      JSON.stringify({ message: "Invio email fallito.", details: error.message }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  return new Response(
    JSON.stringify({ message: "Richiesta inviata con successo." }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
