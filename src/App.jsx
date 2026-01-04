import './App.css'
// import ThemeToggle from './components/ThemeToggle'
import { useState, useEffect } from 'react'


function App() {
  // const [dark, setDark] = useState(true)
  const [showTooltip, setShowTooltip] = useState(true)

  const imagens = [
    'public/1.jpg',
    'public/2.jpg',
    'public/3.jpg',
    'public/4.jpg',
    'public/5.jpg',
    'public/6.jpg',
    'public/7.jpg',
    'public/8.jpg',
    'public/9.jpg',
    'public/10.jpg',
    'public/11.jpg',
    'public/12.jpg',
    'public/13.jpg',
    'public/14.jpg',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])


  const handleWhatsAppClick = () => {
    if (!isIOS() && navigator.vibrate) {
      navigator.vibrate(30)
    }
  }


  const isIOS = () => {
    return (
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    )
  }


  return (
    <div>
      {/* <ThemeToggle dark={dark} setDark={setDark} /> */}

      {imagens.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Cardápio ${i + 1}`}
          className="img img-fluid w-100 d-block"
          loading="lazy"
        />
      ))}

      <a
        href="https://wa.me/5599999999999?text=Olá,%20quero%20fazer%20um%20pedido!"
        target="_blank"
        className="whatsapp-fab"
        aria-label="Fazer pedido no WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12.04 2C6.58 2 2.13 6.44 2.13 11.9c0 1.96.57 3.88 1.64 5.53L2 22l4.7-1.73a9.86 9.86 0 0 0 5.34 1.53h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.87 9.87 0 0 0 12.04 2zm5.64 14.32c-.23.64-1.34 1.23-1.85 1.3-.48.07-1.1.1-1.77-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.7-4.08-4.84-4.27-.14-.19-1.16-1.54-1.16-2.94 0-1.4.74-2.09 1-2.38.27-.29.6-.36.8-.36h.58c.19 0 .45-.07.7.53.23.6.8 1.96.87 2.1.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.38-.43.5-.14.14-.29.29-.12.58.17.29.75 1.23 1.6 1.99 1.1.98 2.03 1.28 2.32 1.43.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.94.29.14.48.22.55.34.07.12.07.69-.16 1.33z" />
        </svg>


        <span className={`whatsapp-tooltip ${showTooltip ? 'tooltip-show' : ''}`}>
          Fazer pedido
        </span>
      </a>

    </div>
  )
}

export default App
