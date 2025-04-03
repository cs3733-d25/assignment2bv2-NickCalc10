
export const Table2 = () => {
    return (
        <table className="table-format">
            <hr />
            <caption className={"headerCaption"}> Here is a helpful chart to know what kind of lure to throw in what kind of condition</caption>
            <thead>
            <tr>
                <th>Season</th>
                <th>Water Temp (F)</th>
                <th>Clear Water</th>
                <th>Muddy Water</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style={{ backgroundColor: 'aliceblue' }}>Winter</td>
                <td>35-50</td>
                <td>spoons, jerkbaits, lipless crankbaits, crankbaits, grubs</td>
                <td>vibrating jigs, spinnerbaits, lipless crankbaits, shallow crankbaits</td>
            </tr>
            <tr>
                <td style={{ backgroundColor: 'aliceblue' }}>Winter</td>
                <td>50-60</td>
                <td>
                    jigs, jerkbaits, lipless crankbaits, shallow crankbaits, spinnerbaits, soft plastics,
                    swimbaits
                </td>
                <td>
                    jigs, vibrating jigs, jerkbaits, lipless crankbaits, shallow crankbaits, spinnerbaits,
                    soft plastics, swimbaits
                </td>
            </tr>
            <tr>
                <td style={{ backgroundColor: 'lightgreen' }}>Spring</td>
                <td>60-65</td>
                <td>
                    jerkbaits, plastics like lizards, craws, tubes, creatures, jigs, spinnerbaits,
                    crankbaits, some topwaters, buzzbaits
                </td>
                <td>spinnerbait, jig, crankbaits, buzzbait, soft plastics</td>
            </tr>
            <tr>
                <td style={{ backgroundColor: 'lightgreen' }}>Spring</td>
                <td>65-70</td>
                <td>
                    topwaters, soft plastics, frogs, jigs, spinnerbaits, crankbaits, buzzbaits, swimbaits
                </td>
                <td>plastics, jigs, crankbait, buzzbait, spinnerbait, frogs</td>
            </tr>
            <tr>
                <td style={{ backgroundColor: 'indianred' }}>Summer</td>
                <td>70-80+</td>
                <td>
                    topwaters, frogs, plastics, deep crankbaits, spinnerbaits, football jigs, flipping
                    jigs, drop shot, jigging spoons, swimbaits
                </td>
                <td>
                    frogs, buzzbaits, shallow crankbaits, spinnerbaits, deep diving crankbaits, football
                    jigs, big worms and plastics
                </td>
            </tr>
            <tr>
                <td style={{ backgroundColor: 'indianred' }}>Summer</td>
                <td>75-70</td>
                <td>
                    shallow crankbaits, spinnerbaits, jigs, smaller worms, topwaters, buzzbaits, frogs,
                    punching baits
                </td>
                <td>shallow crankbaits, spinnerbaits, jigs, smaller plastics, buzzbaits</td>
            </tr>
            <tr>
                <td style={{ backgroundColor: 'coral' }}>Fall</td>
                <td>75-60</td>
                <td>
                    lipless crankbaits, shallow crankbaits, spinnerbaits, jigs, topwaters, offshore jigs
                    and worms, drop shots, frogs, buzzbaits, swimbaits
                </td>
                <td>
                    lipless crankbaits, crankbaits, spinnerbaits, jigs, worms, frogs, buzzbaits
                </td>
            </tr>
            <tr>
                <td style={{ backgroundColor: 'coral' }}>Fall</td>
                <td>60-50</td>
                <td>
                    blade baits, spoons, jigs, spinnerbaits, jerkbaits, lipless crankbaits, crankbaits,
                    some topwater
                </td>
                <td>shallow crankbaits, spinnerbaits, jigs, lipless baits</td>
            </tr>
            </tbody>
        </table>
    );
};
export default Table2