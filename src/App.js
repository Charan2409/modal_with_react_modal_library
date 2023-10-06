import "./styles.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>Open</button>
      <Modal
        style={{
          overlay: {
            backgroundColor: "grey"
          },
          content: {
            backgroundColor: "white",
            color: "orange"
          }
        }}
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <h1>Modal Title</h1>
        <p>Modal content</p>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}
