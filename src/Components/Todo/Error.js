import React from 'react'

export default function Error() {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                <strong>Error:</strong> Title or Description shouldn't be empty.
            </div>
        </div>
    )
}
