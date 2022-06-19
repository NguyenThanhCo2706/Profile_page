import "../EditPage/editPage.css"
import "../Posts/MakePost"

const Input = (props) => {
    const { data, setData, label, inputType, classStyle } = props;
    return (
        <>
            <label>{label}</label>
            {
                inputType === 'textarea' ? (
                    <textarea type="textarea" className={classStyle} placeholder={data} onChange={((e) => setData(e.target.value))} />
                ) : (
                    <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />
                )
            }
        </>
    );
}

export default Input;