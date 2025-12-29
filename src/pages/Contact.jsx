import Section from '../components/UI/Section';
import Card from '../components/UI/Card';

const Contact = () => {
    return (
        <Section>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Contacto</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <Card title="Información de Contacto">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Dirección</strong>
                                <p>Yumbel 971, Linares, Chile.</p>
                            </div>

                            <div>
                                <strong style={{ display: 'block', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Teléfono</strong>
                                <p>(73) 250 2556</p>
                            </div>

                            <div>
                                <strong style={{ display: 'block', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Email</strong>
                                <p>colegiosansebastian23@gmail.com</p>
                            </div>

                            <div>
                                <strong style={{ display: 'block', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Horario de Atención</strong>
                                <p>08:00 – 17:00 hrs</p>
                            </div>
                        </div>
                    </Card>

                    <Card title="Envíanos un mensaje">
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nombre</label>
                                <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} placeholder="Tu nombre" />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                                <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} placeholder="tucorreo@ejemplo.com" />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Mensaje</label>
                                <textarea rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} placeholder="¿En qué podemos ayudarte?"></textarea>
                            </div>

                            <button className="btn" style={{ width: '100%' }}>Enviar Mensaje</button>
                        </form>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
