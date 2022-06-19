import "./editPage.css"
import { useState } from "react"
import Input from "../InputFiled/Input"
import { useSelector, useDispatch } from "react-redux"
import { update } from "../../redux/userSlice"
import { updateUser } from "../../redux/apiRequest"

const EditPage = (props) => {
    const avaUrl = [
        "https://external-preview.redd.it/M7JclYHwOjrrcCac1Inn9Mzxe4SQeNXUjd76CgYDziw.jpg?auto=webp&s=dbc0136accc022a1d244da2cb5d5e3d8300460fa",
        "https://external-preview.redd.it/DWXeJOO1__I-FsMCXylb5uv-LnTNNM-IUkXc-ihB3rA.jpg?auto=webp&s=8840586bfc121611aaa110ddbdee2ef54f70ec07",
        "https://external-preview.redd.it/wnnk1HCNTCXi3XXzJa-00A4U7r_TSv4sf6vO_-shGl0.jpg?auto=webp&s=02321538d0d50f6520c307e8c29941e73e4d8458",
        "https://external-preview.redd.it/x45HcTBDpj9YpafShWqqk8Chvyidrbgd6Z6bTqvEoZA.jpg?auto=webp&s=5676d92050d8328b2025ce337d40169544f0f5cc",
        "https://preview.redd.it/hee044zgpku81.png?width=640&crop=smart&auto=webp&s=f462ea7cd56768b0408a46aebfe2d3fe24ccbc5d",
        "https://preview.redd.it/sq0b9ruxeu491.jpg?width=640&crop=smart&auto=webp&s=4ec08b1aef02eed47caea52ec297ef5c0167a08b"
    ]
    const user = useSelector((state) => state.user)
    const disPatch = useDispatch()
    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [about, setAbout] = useState(user.about)
    const [theme, setTheme] = useState("#ff9051")
    const [url, setUrl] = useState(user.avaUrl)
    const { setEdit } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            theme: theme,
        }
        updateUser(updatedUser, disPatch)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close">SAVE</button>
                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <Input label="Display Name" data={user.name} setData={setName} />
                        <Input label="Age" data={user.age} setData={setAge} />
                        <Input label="About" data={user.about} setData={setAbout} inputType="textarea" classStyle="" />
                        <label>Profile Picture</label>
                        <div className="input-image-container">
                            {avaUrl.map((url, index) => {
                                return (
                                    <img key={index}
                                        src={url}
                                        className="input-image"
                                        alt=""
                                        onClick={(e) => {
                                            setUrl(e.target.src)
                                        }}
                                    />
                                )
                            })}
                        </div>
                        <div className="theme-container">
                            <label>Theme</label>
                            <input type="color" className="theme-color" onChange={(e) => { setTheme(e.target.value) }} />
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}

export default EditPage;