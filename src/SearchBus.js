import { Component } from "react";

export default class SearchBus extends Component {
  render() {
    return (
      <>
        <form>
          <div className="search-flight-name">
            <div class="row">
              <div class="col g-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="One Way Trip"
                  aria-label="First name"
                />
              </div>
              <div class="col g-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Round Trip"
                  aria-label="Last name"
                />
              </div>
            </div>

            <div class="row">
              <div class="col g-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Source City"
                  aria-label="First name"
                />
              </div>
              <div class="col g-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Destination City"
                  aria-label="Last name"
                />
              </div>
            </div>

            <div class="row">
              <div class="col g-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Departure Date"
                  aria-label="First name"
                />
              </div>

              <div class="col g-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Return Date"
                  aria-label="Last name"
                />
              </div>
            </div>
            <br />
            <div class="col g-3">
              <input
                type="text"
                class="form-control"
                placeholder="Passenger"
                aria-label="Last name"
              />
            </div>
            <br />
            <div class="col-auto">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
