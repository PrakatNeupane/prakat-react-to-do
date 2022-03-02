import React from 'react'

export const TaskList = () => {
    return (
        <div class="col-md-6 mb-5">
            <h2 class="text-center">Task list</h2>
            <hr />
            <div class="list-items">
                <table class="table table-striped w-100">
                    <tbody id="task-list">

                    </tbody>
                </table>
            </div>
        </div>
    )
}
