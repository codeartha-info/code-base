import React from "react";
import { Link } from "react-router-dom";

const Technologies = () => {
  return (
    <>
      <div class="container">
        <h1 className="text-center mt-3  fw-bold baseColor">Technologies</h1>

        <p className="text-center text-muted">
          Technology by itself doesn't make leaders. Technology only amplifiers
          true leadership.
        </p>
        {/* <div>
          <ul class="nav">
            <li class="nav-item">
              <Link
                class="nav-link"
                aria-current="page"
                to="/all-service/frontend_technologies"
              >
                Frontend
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/all-service/backend_technologies">
                Backend
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/all-service/devops">
                DevOps
              </Link>
            </li>
          </ul>
        </div> */}

        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
              <li class="nav-item">
                <Link class="nav-link " to="/all-service/frontend_technologies">
                  Frontend
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
