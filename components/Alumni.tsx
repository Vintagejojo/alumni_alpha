import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";
import students from "../data/students.json";

export default function Alumni() {
  return (
    <section className="projects">
      <h2 className="text-center font-bold text-4xl">
        List of students
        <hr className="w-50 h-1 my-3 mx-auto bg-slate-500 border-0 rounded" />
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {students.map((student, idx) => (
          <div key={idx} className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-md shadow-md">
              <Image
                src={student.imageUrl}
                alt={student.name}
                fill
                style={{objectFit: 'cover'}}
                className="w-full h-64"
              />
              <p>{student.name} freaky</p>
              <div className="absolute bottom-0 left-0 right-0 text-center py-2 px-4 bg-gradient-to-r from-slate-900 to-slate-500 rounded-bl-md rounded-br-md">
                <Link
                  href={`/alumni/${student.id}`}
                  className="text-white no-underline flex items-center justify-center"
                >
                  View details
                  <BsLink className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
