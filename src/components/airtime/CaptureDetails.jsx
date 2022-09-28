import React, { Component } from 'react';

export class CaptureDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	placeOrder = () => {
		// e.preventDefault();
		this.props.placeOrder();
	};


	render() {
		// const { values, inputChange, placeOrder } = this.props;
		const { values: { phonenumber, network, product } } = this.props;
		const productValue = `${product.description} - R${product.sellvalue} - ${product.groupname}`;

		return (
			<div className="form-container">
				{/* <h1 className="mb-5">Social Profiles</h1> */}
				<div className="form-group">
					<label htmlFor="phonenumber">Recharge Number</label>
					<input
						type="text"
						className="form-control"
						name="phonenumber"
						// onChange={inputChange('facebook')}
						value={phonenumber}
						readOnly
					/>
				</div>
				<div className="form-group">
					<label htmlFor="network">Network</label>
					<input
						type="text"
						className="form-control"
						name="network"
						// onChange={inputChange('facebook')}
						value={network}
						readOnly
					/>
				</div>
				<div className="form-group">
					<label htmlFor="product">Product</label>
					<input
						type="text"
						className="form-control"
						name="product"
						// onChange={inputChange('facebook')}
						value={productValue}
						readOnly
					/>
				</div>
				<br />

				<div className="row">
					<div className="col-6">
						<button className="btn btn-danger" onClick={this.back}>
							Back
						</button>
					</div>
					<div className="col-6 text-right">
						<button className="btn btn-primary" onClick={this.continue}>
							Continue
						</button>
						{/* <button className="btn btn-primary" onClick={this.placeOrder}>
							Order
						</button> */}
						{/* <button className="btn btn-primary" onClick={this.orderNow}>
							Order
						</button> */}
					</div>
				</div>
			</div>
		);
	}
}

export default CaptureDetails;
