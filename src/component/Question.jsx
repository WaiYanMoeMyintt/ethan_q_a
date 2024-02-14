import React, { useState } from "react";
import { quesTitle } from "../data/title";
import { Button, Modal } from "flowbite-react";

const Question = () => {
  // Initialize an array to keep track of modal states for each item
  const [openModals, setOpenModals] = useState(Array(quesTitle.length).fill(false));
  // Initialize state to track whether text has been copied
  const [copied, setCopied] = useState(Array(quesTitle.length).fill(false));

  // Function to toggle the modal state for a specific index
  const toggleModal = (index) => {
    const newModals = [...openModals];
    newModals[index] = !newModals[index];
    setOpenModals(newModals);
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Clipboard successfully set
        console.log("Text copied to clipboard:", text);
        // Set copied state to true for the specific index
        const newCopied = [...copied];
        newCopied[index] = true;
        setCopied(newCopied);
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  return (
    <div className="question_content">
      {quesTitle.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggleModal(index)}
            className="question text-center"
          >
            <h3 className="text-white text-center">{item.title}</h3>
          </div>
          <Modal show={openModals[index]} onClose={() => toggleModal(index)}>
            <Modal.Header>{item.title}</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {item.message}
                </p>
              </div>
              <div className="space-y-6">
                <img src={item.fir}  />
                <img src={item.sec} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => toggleModal(index)}>နားလည်ပါပြီ</Button>
              <Button color="gray" onClick={() => copyToClipboard(item.message, index)}>
                {copied[index] ? "Copied" : "Copy Text"}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default Question;
