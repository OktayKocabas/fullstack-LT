import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProperties } from "./../../state/property.action";
import {
  selectProperties,
  selectMaxValue,
  selectLoading
} from "./../../state/property.selector";

import "./property.css";

class PropertyList extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }

  renderProperties() {
    return this.props.properties.map((property, index) => {
      return (
        <div key={index} className="property-item">
          <span className="text">{index+1}</span>
          <span className="text">House sold for</span>
          <span className={"price " + this.ratioStatus(property.price)}>
            £ {property.price}
          </span>
          <span className="location">{`at the point (${property.xCoordinate},${
            property.yCoordinate
          })`}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="status">
          <h1>House Status</h1>
          <div className="description">
            <span className="status-1">very expensive</span>
            <span className="status-2">expensive</span>
            <span className="status-3">medium</span>
            <span className="status-4">cheap</span>
            <span className="status-5">very cheap</span>
          </div>
        </div>
        <div className="property-list">{this.renderProperties()}</div>
      </div>
    );
  }

  ratioStatus(value) {
    const ratio = (value / this.props.maxValue) * 100;
    if (ratio <= 5) {
      return "expensive-5";
    } else if (ratio > 5 && ratio <= 25) {
      return "expensive-4";
    } else if (ratio > 25 && ratio <= 75) {
      return "expensive-3";
    } else if (ratio > 75 && ratio <= 95) {
      return "expensive-2";
    } else {
      return "expensive-1";
    }
  }
}

function mapStateToProps(state) {
  const properties = selectProperties(state);
  const maxValue = selectMaxValue(state);
  const loading = selectLoading(state);
  return { properties, maxValue, loading };
}

export default connect(
  mapStateToProps,
  { fetchProperties }
)(PropertyList);
