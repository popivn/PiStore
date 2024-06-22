import React, { useEffect } from 'react';

function SystemRequirement({ gameName }) {
    useEffect(() => {
        const buttons = document.querySelectorAll('.systemRequirementHeader .btn');

        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                buttons.forEach(function (btn) {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }, []); // Chạy một lần khi component được render

    return (
        <div>
            <h4 className="styleH4">{gameName} System Requirement</h4>
            <div className="systemRequirement">
                <div className="systemRequirementHeader d-flex justify-content-center">
                    <p className="btn">Window</p>
                    <p className="btn">MacOS</p>
                </div>
            </div>
        </div>
    );
}

export default SystemRequirement;
