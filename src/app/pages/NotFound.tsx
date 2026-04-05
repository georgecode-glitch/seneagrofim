export function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
        <p className="text-lg text-muted-foreground mb-6">
          La page que vous avez demandée n’existe pas.
        </p>
        <a href="/" className="text-primary underline">
          Revenir à l’accueil
        </a>
      </div>
    </main>
  );
}
