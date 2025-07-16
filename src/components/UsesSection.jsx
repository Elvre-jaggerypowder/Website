import React from "react";
import "./UsesSection.css";

function UsesSection() {
  return (
    <section id="uses" className="uses-section">
      <div className="uses-container">
        <div className="uses-list" data-aos="fade-right">
          <h2>Enjoy Jaggery Powder In:</h2>
          <ul>
            <li>✅ Tea & Coffee</li>
            <li>✅ Ice Creams & Milkshakes</li>
            <li>✅ Energy Bars & Protein Balls</li>
            <li>✅ Breakfast Cereals</li>
            <li>✅ In traditional Sweets</li>
            <li>✅ In Cooking and Curries</li>
            <li>✅ In Detox and Health Drinks</li>
          </ul>
        </div>

        <div className="uses-table" data-aos="fade-left">
          <table>
            <thead>
              <tr>
                <th>NUTRIENT</th>
                <th>AMOUNT</th>
                <th>NUTRIENT</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Carbohydrates</td><td></td><td>Vitamins</td><td></td></tr>
              <tr><td>Sucrose</td><td>73 – 78 g</td><td>Provitamin A</td><td>2.1 mg</td></tr>
              <tr><td>Fructose</td><td>1.6 – 7 g</td><td>Vitamin A</td><td>—</td></tr>
              <tr><td>Glucose</td><td>1.8 – 7 g</td><td>Vitamin B1</td><td>0.02 mg</td></tr>
              <tr><td colSpan="1"></td><td></td><td>Vitamin B2</td><td>0.07 mg</td></tr>
              <tr><td>Minerals</td><td></td><td>Vitamin B5</td><td>0.01 mg</td></tr>
              <tr><td>Calcium</td><td>41 – 100 mg</td><td>Vitamin B6</td><td>0.02 mg</td></tr>
              <tr><td>Magnesium</td><td>71 – 90 mg</td><td>Vitamin C</td><td>7.1 mg</td></tr>
              <tr><td>Phosphorus</td><td>20 – 91 mg</td><td>Vitamin D2</td><td>6.60 mg</td></tr>
              <tr><td>Sodium</td><td>19 – 31 mg</td><td>Vitamin E</td><td>111.40 mg</td></tr>
              <tr><td>Iron</td><td>10 – 14 mg</td><td>Vitamin PP (Niacin)</td><td>7.1 mg</td></tr>
              <tr><td>Manganese</td><td>0.2 – 0.6 mg</td><td>Other Components</td><td></td></tr>
              <tr><td>Zinc</td><td>0.3 – 0.4 mg</td><td>Protein</td><td>281 mg</td></tr>
              <tr><td>Chloride</td><td>5.4 – 0mg</td><td>Water</td><td>1.6 – 7g</td></tr>
              <tr><td>Copper</td><td>0.4 – 0.9 mg</td><td>Calories</td><td>312 kcal</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default UsesSection;
