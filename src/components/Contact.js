const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-2xl">Contact Us Page</h1>
            <form>
                <input
                type="text"
                className="border border-black p-2 m-2" placeholder="name"/>
                <input type="text"
                className="border border-black p-2 m-2"
                placeholder="message"/>
                <button className="bg-green-500 p-2 m-2 rounded-lg">Submit</button>
            </form>
        </div>
    );
};
export default Contact;