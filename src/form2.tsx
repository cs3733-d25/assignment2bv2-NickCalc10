import React from 'react';

const Form2: React.FC = () => {
    return (
        <div className="form-wrapper">
            <hr />
            <br />
            <h2>Personal Best Recorder</h2>
            <form>
                <div className="form-row">
                    <label htmlFor="fullname">Enter Your Full Name</label>
                    <input type="text" id="fullname" />
                </div>

                <div className="form-row">
                    <label htmlFor="size">Enter the weight in lbs</label>
                    <input type="text" id="size" />
                </div>

                <div className="form-row">
                    <label htmlFor="lure">What lure?</label>
                    <input type="text" id="lure" />
                </div>

                <div className="form-row">
                    <label htmlFor="where">What body of water?</label>
                    <input type="text" id="where" />
                </div>

                <div className="form-row">
                    <label htmlFor="time">What time?</label>
                    <input type="text" id="time" />
                </div>

                <div className="form-group">
                    <label className="group-label">What was the water clarity?</label>
                    <br />
                    <label><input type="radio" name="Water_clarity" value="Clear" /> Clear</label><br />
                    <label><input type="radio" name="Water_clarity" value="Stained" /> Stained</label><br />
                    <label><input type="radio" name="Water_clarity" value="Muddy" /> Muddy</label>
                </div>

                <br />
                <div className="form-row">
                    <label htmlFor="weather" className="group-label">What was the Weather?</label>
                    <br />
                    <select id="weather">
                        <option value="choose">Choose</option>
                        <option value="bluebird">Bluebird skies</option>
                        <option value="cloudy">Cloudy</option>
                        <option value="raining">Raining</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="group-label">Season and Water Temp?</label>
                    <div className="checkbox-grid">
                        <label><input type="checkbox" id="winter" /> Winter</label>
                        <label><input type="checkbox" id="spring" /> Spring</label>
                        <label><input type="checkbox" id="summer" /> Summer</label>
                        <label><input type="checkbox" id="fall" /> Fall</label>
                        <label><input type="checkbox" id="temp35-50" /> 35-50</label>
                        <label><input type="checkbox" id="temp60-65" /> 60-65</label>
                        <label><input type="checkbox" id="temp70-80" /> 70-80+</label>
                        <label><input type="checkbox" id="temp75-60" /> 75-60</label>
                        <label><input type="checkbox" id="temp50-60" /> 50-60</label>
                        <label><input type="checkbox" id="temp65-70" /> 65-70</label>
                        <label><input type="checkbox" id="temp75-70" /> 75-70</label>
                        <label><input type="checkbox" id="temp60-50" /> 60-50</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="technique">
                        Can you provide more detail on how you caught it?
                        <br />
                        Such as the technique you were using.
                    </label>
                    <textarea id="technique" rows={4} cols={50}></textarea>
                </div>

                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form2;
