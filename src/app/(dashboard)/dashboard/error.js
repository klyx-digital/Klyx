"use client"; // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Oups, une erreur est survenue !</h2>
        <p>
          Nous rencontrons un petit souci technique. Pas d’inquiétude, cela peut
          arriver ! Cliquez simplement sur le bouton ci-dessous pour réessayer.
        </p>
        <button onClick={() => reset()}>Reessayer</button>
      </body>
    </html>
  );
}
