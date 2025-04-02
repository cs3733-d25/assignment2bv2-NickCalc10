const Table1 = () => {
    return (
        <div>
        <table className ="table-format">
            <caption className={"headerCaption"}>Exercises For Muscle Groth</caption>
            <thead>
                <tr className = "tr">
                    <th>Exercise</th>
                    <th>Muscle Targeted</th>
                    <th>Muscle Growth Rating</th>
                    <th>Injury Risk</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bench</td>
                    <td>Chest</td>
                    <td>7.5/10</td>
                    <td>5/10</td>
                </tr>
                <tr>
                    <td>Squat</td>
                    <td>Legs</td>
                    <td>8.5/10</td>
                    <td>6/10</td>
                </tr>
                <tr>
                    <td>Deadlift</td>
                    <td>Legs & Back</td>
                    <td>4/10</td>
                    <td>8/10</td>
                </tr>
                <tr>
                    <td>Dumbbell Curls</td>
                    <td>Biceps</td>
                    <td>9/10</td>
                    <td>3/10</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Table1