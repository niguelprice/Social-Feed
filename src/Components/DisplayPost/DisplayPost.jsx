import CustomButton from "../Post/Post";

const DisplayPost = (props) => {
    return ( 
        <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Like/Dislike</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry,handleClick) => {
            return (
              <tr>
                <td>{entry.Name}</td>
                <td>{entry.Post}</td>
                <td>
                  {''}
                  {<CustomButton message='Like/Dislike'/>}
                </td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
     );
}
 
export default DisplayPost;