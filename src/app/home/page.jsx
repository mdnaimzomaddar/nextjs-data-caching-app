import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-150 shadow-sm">
          <figure className="px-10 pt-10">
            <Image
                src="/Md Naim Zomaddar.jpg"
                width={300}
                height={300}
                alt="Mr Naim Zomaddar"
                className="rounded"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md Naim Zomaddar</h2>
            <p>
              Hello! My name is Md Naim Zomaddar, and I am a Software Engineering student. I am passionate about learning new technologies, developing innovative projects, and solving complex problems through programming.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">View Github</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
