"use client"
import Image from "next/image";
import { useRef } from "react";


interface formProps {
    className?: string;
    action: (formData: FormData) => Promise<void | boolean>;
    userImage?: string |null;
    userId?: string;
}

const Form = ({ action, className, userImage, userId }: formProps) => {

    const formRef = useRef<HTMLFormElement>(null);

    return (<form
        ref={formRef}
        action={async (formData) => {
            await action(formData);
            formRef.current?.reset();
        }}
        className={className}
    >
        <div className="w-full bg-gray-100 text-gray-900 py-2 px-4 ">
            <h2>Create a Post</h2>
        </div>
        <div className="w-full flex justify-center px-6">
            {
                userImage ? <Image src={userImage}  alt="logo" width={120} height={120} className="rounded-full object-cover" /> : null
            }
            <input type="text" name="userId" value={userId} className="hidden" />
            <textarea name="post" id="post" cols="40" rows="3"
                className="w-full p-2 resize-none outline-none"
                placeholder="What's on your mind?"
            ></textarea>
        </div>
        <div className="w-full flex justify-end p-2 border-t border-gray-300">

            <button
                className="bg-sky-500 text-white py-2 px-4 rounded mt-2" type="submit">Submit</button>
        </div>

    </form>);
}

export default Form;