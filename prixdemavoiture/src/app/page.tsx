export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#3b82f6' }}>Prix de ma voiture</h1>
      <p>Bienvenue sur notre plateforme d'estimation de véhicules</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/estimation" style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.25rem', textDecoration: 'none', marginRight: '1rem' }}>
          Estimer ma voiture
        </a>
        <a href="/contact" style={{ padding: '0.5rem 1rem', border: '1px solid #3b82f6', color: '#3b82f6', borderRadius: '0.25rem', textDecoration: 'none' }}>
          Nous contacter
        </a>
      </div>
    </div>
  );
}
