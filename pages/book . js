export default function BookPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Book an Appointment</h1>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Full Name:
          <input type="text" name="name" required style={inputStyle} />
        </label>

        <label>
          Service:
          <select name="service" required style={inputStyle}>
            <option value="">Select a service</option>
            <option value="gents">Gents Haircut</option>
            <option value="boys">Boys Cut</option>
            <option value="senior">Senior Cut</option>
            <option value="fade">Skin Fade</option>
            <option value="beard">Beard Trim</option>
          </select>
        </label>

        <label>
          Date:
          <input type="date" name="date" required style={inputStyle} />
        </label>

        <label>
          Time:
          <input type="time" name="time" required style={inputStyle} />
        </label>

        <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
          Book Now
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  marginTop: '0.25rem',
};
