import React from 'react'

function Mymessage({ message })
{
    if (message?.attachments?.length > 0)
    { 
        return (
            <img src={message.attachments[0].file} alt="message-attachment" className='message-image' style={{float:'right'}} />)
    }
    return (
        <div className='message' style={{ float: 'right', marginRight: '18px', color: 'black', backgroundColor: '#8f8383',fontSize:"large" }}>
        {message.text}
        </div>
    )
}

export default Mymessage