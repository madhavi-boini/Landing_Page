import React from 'react'

function FeaturesComponent() {
  return (
    <>
        <header>OUR FEATURES</header>
            <table  >
                <tr>
                <td>
                    <img src='/stories.jpg'/>
                </td>
                <td><img src='/reels.jpg'/></td>
                <td>
                    <img src='/messages.png'/>
                </td>
                <td>
                    <img src='/interests.jpg'/>
                </td>
                </tr>
                <tr>
                <td><h4>Stories</h4>
                <p>Post your moments</p>
                </td>
                <td><h4>Reels</h4>
                <p>Create videos to share with friends</p>
                </td>
                <td>
                <h4>Conversation</h4>
                <p>Send photos videos messages</p>
                </td>
                <td>
                <h4>Discover</h4>
                <p>Discover your favourites</p>
                </td>
                </tr>

            </table>
    </>
  )
}


export default FeaturesComponent
