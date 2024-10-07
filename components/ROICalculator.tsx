"use client";

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2"; // Import Doughnut from react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the types for the calculator's state
interface CalculatorState {
  fleetSize: number;
  roi: number | null;
  fuelSavings: number;
  maintenanceSavings: number;
  safetySavings: number;
  productivitySavings: number;
}

const ROICalculator: React.FC = () => {
  // Initialize state with default values
  const [state, setState] = useState<CalculatorState>({
    fleetSize: 10, // Default fleet size
    roi: null,
    fuelSavings: 0,
    maintenanceSavings: 0,
    safetySavings: 0,
    productivitySavings: 0,
  });

  const [error, setError] = useState<string | null>(null); // For validation error messages

  // Function to handle fleet size input change
  const handleFleetSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value <= 0) {
      setError("Please enter a valid fleet size (positive number).");
      setState({ ...state, fleetSize: 0 });
    } else {
      setError(null); // Clear the error if the input is valid
      setState({ ...state, fleetSize: value });
    }
  };

  // Function to calculate ROI, fuel savings, and maintenance savings
  const calculateROI = () => {
    const { fleetSize } = state;

    if (fleetSize <= 0) {
      setError("Fleet size must be greater than 0.");
      return;
    }

    // Preset values
    const avgMileage = 15000; // miles per vehicle per year
    const fuelPrice = 3.5; // price per gallon
    const mpg = 20; // miles per gallon
    const idleTimePercentage = 0.2; // idle time as 20% of driving time
    const maintenanceSavingsPerVehicle = 200; // maintenance savings per vehicle
    const safetySavingsPerVehicle = 150; // safety/insurance savings per vehicle
    const productivitySavingsPerVehicle = 250; // productivity savings per vehicle
    const investmentCost = 10000; // assumption for investment

    // Calculations
    const totalMiles = fleetSize * avgMileage; // total miles driven by fleet
    const totalFuelCost = (totalMiles / mpg) * fuelPrice; // total fuel cost for the fleet
    const idleFuelCost = idleTimePercentage * totalFuelCost; // fuel cost during idle time
    const fuelSavings = totalFuelCost - idleFuelCost; // fuel savings due to reduced idling
    const maintenanceSavings = fleetSize * maintenanceSavingsPerVehicle; // total maintenance savings
    const safetySavings = fleetSize * safetySavingsPerVehicle; // total safety/insurance savings
    const productivitySavings = fleetSize * productivitySavingsPerVehicle; // total productivity savings

    // Total savings
    const totalSavings =
      fuelSavings + maintenanceSavings + safetySavings + productivitySavings;

    // ROI calculation
    const roi = (totalSavings / investmentCost) * 100;

    // Update the state with calculated values
    setState({
      ...state,
      roi,
      fuelSavings,
      maintenanceSavings,
      safetySavings,
      productivitySavings,
    });
  };

  // Prepare data for the Doughnut chart with brand colors
  const doughnutData = {
    labels: [
      "Fuel Savings",
      "Maintenance Savings",
      "Safety/Insurance Savings",
      "Productivity Savings",
    ],
    datasets: [
      {
        data: [
          state.fuelSavings,
          state.maintenanceSavings,
          state.safetySavings,
          state.productivitySavings,
        ],
        backgroundColor: ["#CF1317", "#82BC40", "#3DBBD3", "#FFCE56"], // Brand colors for each category
        hoverBackgroundColor: ["#CF1317", "#82BC40", "#3DBBD3", "#FFCE56"],
      },
    ],
  };

  return (
    <div
      className="max-w-md mx-auto mt-10 mb-10 bg-white p-8 rounded-lg shadow-md"
      id="roi"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">
        ROI Calculator
      </h2>

      <form className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="fleetSize"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Enter Your Fleet Size:
          </label>
          <input
            type="number"
            id="fleetSize"
            value={state.fleetSize}
            onChange={handleFleetSizeChange}
            placeholder="e.g., 10"
            required
            className={`px-4 py-2 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>

        <button
          type="button"
          onClick={calculateROI}
          disabled={state.fleetSize <= 0} // Disable button if input is invalid
          className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${
            state.fleetSize <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 transition duration-200"
          }`}
        >
          Calculate ROI
        </button>
      </form>

      {/* Display the results if ROI has been calculated */}
      {state.roi !== null && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-lg font-semibold">Results</p>
          <p className="mt-2 text-sm">
            Your estimated ROI is: <strong>{state.roi.toFixed(2)}%</strong>
          </p>
          <p className="mt-2 text-sm">
            Fuel Savings: <strong>${state.fuelSavings.toFixed(2)}</strong>
          </p>
          <p className="mt-2 text-sm">
            Maintenance Savings:{" "}
            <strong>${state.maintenanceSavings.toFixed(2)}</strong>
          </p>
          <p className="mt-2 text-sm">
            Safety/Insurance Savings:{" "}
            <strong>${state.safetySavings.toFixed(2)}</strong>
          </p>
          <p className="mt-2 text-sm">
            Productivity Savings:{" "}
            <strong>${state.productivitySavings.toFixed(2)}</strong>
          </p>

          {/* Display the Doughnut chart */}
          <div className="mt-6">
            <Doughnut data={doughnutData} />
          </div>

          {/* Add the small legend below the chart */}
          <div className="mt-4 text-xs text-gray-600 text-center">
            <p>This is the average ROI our customers typically experience.</p>
            <p>
              For more precise and detailed ROI data,{" "}
              <a href="#contact" className="text-blue-500 underline">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;
