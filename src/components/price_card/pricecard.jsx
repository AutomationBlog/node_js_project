import "./pricecard.css";
export default function pricecard() {
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0/month</h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plus Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9/month</h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>5 Users</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pro Tier --> */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49/month</h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Users</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomains</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
