const Contact = () => {
    return(
        <div className="contact flex flex-wrap justify-center items-center py-6 gap-4">
            <h1 className="font-bold text-2xl flex flex-wrap justify-center items-center py-6 gap-4">Contact Us Page</h1>
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