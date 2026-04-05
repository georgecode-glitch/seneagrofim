import { Link } from "react-router";
import { useEffect, useState } from "react";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function Thanks() {
  const [lastSubmission, setLastSubmission] = useState<ContactPayload | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.getItem("lastContactSubmission");
      if (data) {
        try {
          setLastSubmission(JSON.parse(data));
        } catch {
          setLastSubmission(null);
        }
        window.localStorage.removeItem("lastContactSubmission");
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Merci !</h1>
        <p className="text-gray-700 mb-6">
          Votre message a bien été envoyé. Nous reviendrons vers vous au plus vite.
          Le propriétaire du site a accès à cette soumission depuis Netlify Dashboard • Forms.
        </p>
        {lastSubmission ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left mb-6">
            <h2 className="font-semibold text-green-700 mb-2">Contenu du message envoyé</h2>
            <p><strong>Nom :</strong> {lastSubmission.name}</p>
            <p><strong>Email :</strong> {lastSubmission.email}</p>
            <p><strong>Téléphone :</strong> {lastSubmission.phone || "(vide)"}</p>
            <p><strong>Sujet :</strong> {lastSubmission.subject}</p>
            <p><strong>Message :</strong> {lastSubmission.message}</p>
          </div>
        ) : (
          <p className="text-gray-600 mb-6">Aucune soumission locale trouvée (peut provenir d'un envoi direct Netlify).</p>
        )}
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
