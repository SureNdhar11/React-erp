import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { ButtonContainer } from './Button'

export default function Dashboard() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-primary">
                    <h1>Welcome all For My Shopping Page</h1>
                </div>
                {/* <div className="col-10 mx-auto  text-center">
                    <Link to="/pro">
                        <ButtonContainer>
                            back to shopping
                        </ButtonContainer>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}