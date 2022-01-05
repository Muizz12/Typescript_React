import { type } from 'os';
import React, { FC, useState, ChangeEvent } from 'react';
export enum haircolor {
    blond = "Your hair is blond",
    brown = "Cool hair color",
    Pink = "Wow so cool"
}
type NameType = "Moiz" | "khizar"

interface Props {
    name?: string;
    age?: number;
    email?: string;
    haircolor: haircolor
    // getName: (name: string) => string

}



// export const Person = ({ name, email, age }: Props) => {
export const Person: FC<Props> = ({ name, email, age, haircolor }) => {
    const [country, setcountry] = useState<string | null>(null)
    const nameforType: NameType = "khizar"
    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setcountry(e.target.value)
    }
    return (
        <div>
            <h1>
                {name}
            </h1>
            <h1>
                {
                    email
                }
            </h1>
            <h1>
                {
                    age
                }
            </h1>
            <input type="text" placeholder='your country' onChange={handlechange

            } />
            {country}
            {haircolor}

        </div>
    );
}
