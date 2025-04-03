
const form1 = ()=> {
    return(
        <div>
            <hr />
            <h2>Optimize Your Workout Schedule Form</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="FN"> Enter your FirstName:</label>
                    <input type="text" id="FN"/>
                </div>
                <br/>
                <br/>
                <div className="form-group">
                    <label htmlFor="LN"> Enter your LastName:</label>
                    <input type="text" id="LN"/>
                </div>
                <br/>
                <br/>
                <div className="form-group">
                    <label htmlFor="Workout Days"> # of Days You Will Weightlift:</label>
                    <input type="text" id="Workout Days"/>
                </div>
                <br/>
                <br/>
                <p>Best Place to Work out for Your Schedule (Select places you see yourself working out can be more than
                    one):</p>
                <input type="checkbox" id="homegym"/>
                <label htmlFor="homegym">Home Gym</label>
                <br/>
                <input type="checkbox" id="gymSub"/>
                <label htmlFor="gymSub">Commerical Gym</label>
                <br/>
                <input type="checkbox" id="park"/>
                <label htmlFor="park">Local Park</label>
                <p>I would recommend these three splits in the options below to start with. Which of these seems the
                    most fun for you to begin your journey</p>

                <input type="radio" id="FullBody" name="split"/>
                <label htmlFor="FullBody">Full Body</label>
                <input type="radio" id="PushPullLegs" name="split"/>
                <label htmlFor="PushPullLegs">Push Pull Legs</label>
                <input type="radio" id="Upper Lower" name="split"/>
                <label htmlFor="Upper Lower">Upper Lower</label>
                <br/>
                <br/>

                <label htmlFor="Experience">Choose Your Experience Level:</label>
                <select id="Experience" name="Experience Level">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br/>
                <br/>
                <label htmlFor="Comments"> Write Comments or Questions Here: </label>
                <textarea id="Comments"></textarea>
                <br/>
                <br/>
                <button type="submit"> Submit</button>
            </form>

        </div>

    )
}

export default form1;