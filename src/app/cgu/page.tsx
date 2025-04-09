import React from 'react';

export const metadata = {
  title: 'Conditions Générales d\'Utilisation | Prix de ma voiture',
  description: 'Conditions générales d\'utilisation régissant l\'accès et l\'utilisation du site prixdemavoiture.fr',
};

export default function CGUPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">Conditions Générales d'Utilisation</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              En vigueur au 1er avril 2025
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 1 - Définitions</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Dans les présentes conditions générales d'utilisation, les mots ou expressions commençant avec une majuscule auront la signification suivante :
            </p>
            
            <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
              <li><strong>Site</strong> : le site internet accessible à l'adresse prixdemavoiture.fr, ainsi que les sous-sites, sites miroirs, portails et variations d'URL y afférents.</li>
              <li><strong>PrixDeMaVoiture</strong> : désigne la société PrixDeMaVoiture SAS, société par actions simplifiée au capital de 50 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789, dont le siège social est situé au 123 Avenue des Champs-Élysées, 75008 Paris, France.</li>
              <li><strong>Utilisateur</strong> : toute personne qui accède et navigue sur le Site, qu'elle soit Visiteur ou Membre.</li>
              <li><strong>Visiteur</strong> : tout Utilisateur non identifié sur le Site.</li>
              <li><strong>Membre</strong> : tout Utilisateur identifié sur le Site.</li>
              <li><strong>Contenu</strong> : ensemble des éléments constituant l'information présente sur le Site, notamment textes, graphiques, logos, images, photographies, vidéos, sons, données, bases de données et programmes informatiques.</li>
              <li><strong>Annonce</strong> : ensemble des éléments et données (visuelles, textuelles, sonores, photographies, dessins), déposé par un Membre sous sa responsabilité éditoriale exclusive, en vue d'acheter, de vendre ou de faire estimer un véhicule et diffusé sur le Site.</li>
            </ul>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 2 - Objet</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Les présentes Conditions Générales d'Utilisation (ci-après "CGU") établissent les règles d'utilisation du Site édité et fourni par PrixDeMaVoiture. En naviguant sur le Site, l'Utilisateur reconnaît avoir pris connaissance et accepter pleinement et sans réserve les présentes CGU.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture se réserve le droit de modifier à tout moment les CGU en publiant une nouvelle version sur le Site. Les CGU applicables sont celles en vigueur à la date de navigation sur le Site.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 3 - Accès au Site</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Le Site est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès au Site, que ce soient les frais matériels, logiciels ou d'accès à Internet sont exclusivement à la charge de l'Utilisateur.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              L'accès à certaines sections du Site nécessite la création préalable d'un compte. L'Utilisateur est entièrement responsable de la préservation de la confidentialité de ses identifiants de connexion.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au Site, mais n'est tenu à aucune obligation d'y parvenir. PrixDeMaVoiture ne peut, en outre, être tenue responsable de tout dysfonctionnement du réseau ou des serveurs ou de tout autre événement échappant au contrôle raisonnable, qui empêcherait ou dégraderait l'accès au Site.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture se réserve la possibilité d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès à tout ou partie du Site, afin d'en assurer la maintenance, ou pour toute autre raison, sans que l'interruption n'ouvre droit à aucune obligation ni indemnisation.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 4 - Inscription au Site</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              L'utilisation de certains services du Site nécessite que l'Utilisateur s'inscrive en remplissant le formulaire d'inscription disponible sur le Site. L'Utilisateur s'engage à fournir des informations exactes et à les maintenir à jour.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Lors de son inscription, l'Utilisateur choisit un identifiant et un mot de passe qui lui permettront d'accéder à son compte. L'Utilisateur est seul responsable de la préservation de la confidentialité de son identifiant et de son mot de passe.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              L'Utilisateur s'engage à informer immédiatement PrixDeMaVoiture de toute utilisation non autorisée de son compte, ou de toute autre violation de la sécurité.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture ne pourra être tenue responsable de toute perte ou dommage résultant du non-respect par l'Utilisateur des dispositions du présent article.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 5 - Services proposés</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Le Site offre aux Utilisateurs les services suivants :
            </p>
            
            <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
              <li>Estimation de la valeur d'un véhicule</li>
              <li>Publication d'annonces de vente de véhicules</li>
              <li>Consultation d'annonces de véhicules à vendre</li>
              <li>Mise en relation entre vendeurs particuliers et acheteurs (particuliers ou professionnels)</li>
              <li>Certification blockchain de l'historique des véhicules</li>
              <li>Services de conseil et d'accompagnement dans la vente ou l'achat d'un véhicule</li>
            </ul>
            
            <p className="text-sm text-gray-600 mb-4">
              Certains services sont accessibles uniquement aux Membres et peuvent être soumis à des conditions particulières détaillées dans les Conditions Générales de Vente.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 6 - Publication d'annonces</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Le Membre qui souhaite publier une annonce sur le Site s'engage à respecter les règles suivantes :
            </p>
            
            <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
              <li>Fournir des informations exactes, complètes et à jour sur le véhicule proposé</li>
              <li>Publier uniquement des photographies réelles et récentes du véhicule concerné</li>
              <li>Ne pas proposer à la vente des véhicules volés, contrefaits ou dont la commercialisation est interdite</li>
              <li>Respecter la législation en vigueur, notamment en matière de vente de véhicules</li>
              <li>Ne pas inclure dans l'annonce des contenus injurieux, diffamatoires, discriminatoires ou contraires à l'ordre public et aux bonnes mœurs</li>
            </ul>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture se réserve le droit de refuser ou de supprimer toute annonce qui ne respecterait pas ces règles ou les présentes CGU, sans préavis ni indemnité.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 7 - Propriété intellectuelle</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Le Site et chacun des éléments qui le composent (tels que marques, images, textes, vidéos, etc.) sont protégés par le droit de la propriété intellectuelle. Ils sont la propriété exclusive de PrixDeMaVoiture ou de ses partenaires.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              L'Utilisateur s'engage à ne pas utiliser ces éléments, et à ne pas permettre à des tiers de les utiliser à quelque titre que ce soit, sauf autorisation préalable et écrite de PrixDeMaVoiture.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de PrixDeMaVoiture.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              En publiant une annonce sur le Site, le Membre accorde à PrixDeMaVoiture une licence non exclusive, gratuite, mondiale, pour la durée de protection des droits, pour utiliser, copier, modifier, adapter, publier, traduire, créer des œuvres dérivées, distribuer, exécuter et afficher le contenu de l'annonce (en tout ou en partie) et/ou pour l'incorporer dans d'autres œuvres sous quelque forme, média ou technologie que ce soit.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 8 - Responsabilité</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur le Site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, PrixDeMaVoiture ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition des Utilisateurs sur le Site.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Les informations fournies par PrixDeMaVoiture le sont à titre indicatif et ne sauraient dispenser l'Utilisateur d'une analyse complémentaire et personnalisée. L'Utilisateur s'engage à vérifier la pertinence des informations fournies.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture ne pourra en aucun cas être tenue responsable des dommages directs ou indirects, notamment préjudice matériel, perte de données ou de programme, préjudice financier, résultant de l'utilisation du Site ou des services accessibles via le Site.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture ne garantit pas que le Site soit exempt de virus informatiques ni d'autres anomalies indépendantes de sa volonté.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 9 - Liens hypertextes</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Le Site peut contenir des liens hypertextes vers d'autres sites internet ou d'autres ressources disponibles sur Internet. PrixDeMaVoiture ne dispose d'aucun moyen pour contrôler les sites en connexion avec son site internet et ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu'ils proposent, ou de tout usage qui peut être fait de ces éléments.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Les risques liés à cette utilisation incombent pleinement à l'Utilisateur, qui doit se conformer à leurs conditions d'utilisation.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 10 - Protection des données personnelles</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture collecte et traite les données à caractère personnel des Utilisateurs du Site conformément à sa Politique de Confidentialité, accessible sur le Site.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, telle que modifiée par la loi n°2004-801 du 6 août 2004, et par le Règlement Européen n°2016/679, l'Utilisateur dispose d'un droit d'accès, de rectification, d'effacement, et de portabilité des données le concernant, ainsi que du droit de s'opposer au traitement pour motif légitime, droits qu'il peut exercer en s'adressant au responsable de traitement à l'adresse email suivante : privacy@prixdemavoiture.fr.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 11 - Cookies</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Le Site utilise des cookies pour améliorer l'expérience de navigation des Utilisateurs et fournir des fonctionnalités personnalisées. Un cookie est un petit fichier texte stocké par le navigateur de l'Utilisateur qui permet d'analyser son utilisation du Site.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Les informations recueillies par le biais des cookies ne permettent en aucune manière d'identifier nominativement l'Utilisateur. Elles sont utilisées exclusivement pour les besoins propres de PrixDeMaVoiture, afin d'améliorer l'interactivité et la qualité de service du Site.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              L'Utilisateur peut s'opposer à l'enregistrement de cookies en configurant son navigateur selon les modalités détaillées dans la Politique de Confidentialité.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 12 - Droit applicable et juridiction compétente</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Les présentes CGU sont régies par le droit français. En cas de différend et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 13 - Contact</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l'adresse suivante :
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              PrixDeMaVoiture SAS<br />
              123 Avenue des Champs-Élysées<br />
              75008 Paris, France<br />
              Email : contact@prixdemavoiture.fr<br />
              Téléphone : +33 1 23 45 67 89
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
