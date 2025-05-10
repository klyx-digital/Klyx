// 📁 /app/api/webhook/route.js
export const config = { api: { bodyParser: false } };

export async function POST(req) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const event = stripe.webhooks.constructEvent(body, sig, secret);

    switch (event.type) {
      case "checkout.session.completed":
        // Créer l'abonnement en BDD
        break;
      case "invoice.paid":
        // Mettre à jour le statut = "active"
        break;
      case "invoice.payment_failed":
        // Gérer l’échec
        break;
      case "customer.subscription.deleted":
        // Supprimer ou suspendre
        break;
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}
