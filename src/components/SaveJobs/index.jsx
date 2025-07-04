import React, { useState } from "react";
import Navbar from "../Navbar";

const SaveJobs = () => {
  // Safely parse the stored data, defaulting to an empty array if null or invalid
  const storedJobs = JSON.parse(localStorage.getItem("Job") || '[]');
  // Ensure 'jobs' is always an array. If storedJobs was a single object, make it an array.
  const jobs = Array.isArray(storedJobs) ? storedJobs : (storedJobs ? [storedJobs] : []);

  return (
    <div>
      <Navbar />
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Saved Jobs</h2>
          </div>
        </div>
        <div className="job-section">
          <div className="job-page">
            {jobs.length > 0 ? (
              jobs.map((job, index) => {
                // Destructure properties with default values to prevent errors if missing
                const { logo, company, position, location, role } = job || {};
                return (
                  <div className="job-list" key={index}> {/* Add a key for list items */}
                    <div className="job-card">
                      <div className="job-name">
                        {logo && ( // Only render image if logo exists
                          <img
                            src={require(`../../Assets/images/${logo}`)}
                            alt="logo"
                            className="job-profile"
                          />
                        )}
                        <div className="job-detail">
                          <h4>{company || 'N/A'}</h4> {/* Provide default text */}
                          <h3>{position || 'N/A'}</h3>
                          <div className="category">
                            <p>{location || 'N/A'}</p>
                            <p>{role || 'N/A'}</p>
                          </div>
                        </div>
                      </div>
                      <div className="job-posting">
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No saved jobs found.</p> // Message when no jobs are saved
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveJobs;
