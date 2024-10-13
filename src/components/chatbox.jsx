import React, { useState } from 'react';
import '../style/chatbox.css';
import { FaPaperPlane } from 'react-icons/fa'; 


function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false); // Nuevo estado para colapsar/expandir

//   const handleSendMessage = () => {
//     if (input.trim()) {
//       const newMessage = { user: 'client', text: input };
//       setMessages([...messages, newMessage]);
//       setInput('');

//       // Simular respuesta del bot
//       setTimeout(() => {
//         const botMessage = { user: 'bot', text: `Buscando información sobre "${input}"...` };
//         setMessages(prev => [...prev, botMessage]);
//       }, 1000);
//     }
//   };

const handleSendMessage = () => {
  if (input.trim()) {
    const newMessage = { user: 'client', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    // Hacer una solicitud al backend Flask
    fetch('http://localhost:5000/chat', {  // Reemplaza con la URL de tu backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: input })  // Enviar la pregunta del usuario
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del backend:', data);  // Depuración
      const botMessage = { user: 'bot', text: data.response };  // Respuesta del bot
      setMessages(prev => [...prev, botMessage]);  // Añadir la respuesta del bot
    })
    .catch(error => {
      console.error("Error al enviar el mensaje:", error);
      const errorMessage = { user: 'bot', text: 'Hubo un error al obtener la respuesta.' };
      setMessages(prev => [...prev, errorMessage]);
    });
  }
};


  const toggleChatbox = () => {
    setIsCollapsed(!isCollapsed);  // Cambiar el estado de colapsar/expandir
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header" onClick={toggleChatbox}>
        <h3>Chat box</h3>
      </div>
      
      {/* Condicional para mostrar/ocultar el cuerpo y pie del chatbox */}
      {!isCollapsed && (
        <>
          <div className="chatbox-body">
            {messages.map((message, index) => (
              <div key={index} className={message.user === 'client' ? 'client-message' : 'bot-message'}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbox-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe un mensaje..."
              onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null}
            />
            <button onClick={handleSendMessage}><FaPaperPlane /> </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Chatbox;
