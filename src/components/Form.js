import React, { useState } from 'react'

const initialSate = { task: '', hr: '' }

export const Form = () => {

    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState(initialSate)

    const inputTaskFieldHandler = e => {
        const { value, name } = e.target;
        const taskObj = {
            [name]: value
        }
        console.log(taskObj);
    }



    return (
        <div class="row">
            <div class="col p-5">
                <div class="form-box pb-4">
                    <form
                        action="javascript:void(0)"
                        onsubmit="handleOnSubmit(this)"
                        class="row gx-3 d-flex justify-content-center gy-2 align-items-center"
                    >
                        <div class="col-md-4">
                            <label class="visually-hidden" for="specificSizeInputName"
                            >Name</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                name="task"
                                id="specificSizeInputName"
                                placeholder="Your task"
                                onChange={inputTaskFieldHandler}
                                required
                            />
                        </div>
                        <div class="col-md-4">
                            <div class="input-group">
                                <input
                                    type="number"
                                    name="hr"
                                    class="form-control"
                                    id="specificSizeInputGroupUsername"
                                    placeholder="Hours"
                                    onChange={inputTaskFieldHandler}
                                    required
                                />
                            </div>
                        </div>

                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
