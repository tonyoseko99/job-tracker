"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import AddJobForm from "@/components/AddJobForm";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-20 pb-50">
      <div className="container flex items-center justify-between">
        <h1 className="underline cursor-pointer font-bold text-xl leading-3">
          My Applications
        </h1>
        {isOpen ? (
          <button
            className="border rounded p-3 hover:text-black hover:bg-white"
            onClick={closeForm}
          >
            Close
          </button>
        ) : (
          <button
            className="border rounded p-3 hover:text-black hover:bg-white"
            onClick={openForm}
          >
            Add Job
          </button>
        )}
      </div>
      <div id="__next">
        <Modal
          isOpen={isOpen}
          onRequestClose={closeForm}
          className="modalonye py-10"
          overlayClassName="overlay"
        >
          <AddJobForm />
        </Modal>
      </div>
    </main>
  );
}
