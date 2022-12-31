import { exerciseDifficulty, exerciseType, exerciseMuscles } from "../constants";

export const getStaticProps = async () => {
    const url = "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=expert";
    const res = await fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1a588820e4mshe7fdd4553a7e911p106277jsn97395e2e3501',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
        })
    
    const data = await res.json();


    return {
        props: { bodyParts: data}
    }
}

const Resources = () => {

const onSubmit = () => {

}


    return (
        <div>
            
            <h1> This is the resource page! </h1>

            <form>
                <label> Find an exercise by type: </label>
                <select>
                { exerciseType.map(
                    type => (<option value={type} key={type}> {type} </option>)
                )} 
                </select>
                <button type="submit" onClick={onSubmit}> Submit </button>
            </form>
            <form>
                <label> Find an exercise by muscle group: </label>
                <select>
                { exerciseMuscles.map(
                    muscle => (<option value={muscle} key={muscle}> {muscle} </option>)
                )} 
                </select>
                <button type="submit" onClick={onSubmit}> Submit </button>
            </form>
            <form>
                <label> Find an exercise by difficulty level: </label>
                <select>
                { exerciseDifficulty.map(
                    difficulty => (<option value={difficulty} key={difficulty}> {difficulty} </option>)
                )} 
                </select>
                <button type="submit" onClick={onSubmit}> Submit </button>
            </form>
                        {/* <div> 
                { bodyParts.map(
                    bodyPart => (<p key={bodyPart.name}> {bodyPart.name} </p>)
                )} 
            </div> */}
        </div>
    )
};

export default Resources;