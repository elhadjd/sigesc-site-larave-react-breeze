import FooterComponent from "@/Components/home/Footer";
import { HeaderComponent } from "@/Components/home/Header";
import { UserLoggedProvider } from "@/contexts/loggedUser";
import { FormStateProvider } from "@/contexts/stateForm";
import { User } from "@/types";

const ResourceItem = (data:learningDataTs) => (
    <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold">{data.translate[0].title}</h3>
      <p className="text-gray-600">{data.translate[0].description}</p>
      {data.type === 'video' ? (
        <a href={data.link} target="_blank" className="text-blue-500 hover:underline">watch video</a>
      ) : (
        <a href={data.link} className="text-blue-500 hover:underline">see more</a>
      )}
    </div>
  );

  interface learningDataTs{
    link: string,
    type: string
    translate:{
        title: string,
        description: string,

        learning_center_id: number,
    }[]
  }

  export default function LearningCenter(props:{auth:{user:User},local: string,data:learningDataTs[]}) {

    return (
        <UserLoggedProvider>
            <FormStateProvider>
                <HeaderComponent auth={props.auth} local={props.local}/>
                <div className="container mx-auto p-6">
                    <h1 className="text-3xl font-bold text-center mb-8">Centro de Aprendizagem SIGESC</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {props.data.map((resource, index) => (
                        <ResourceItem key={index} {...resource} />
                    ))}
                    </div>
                </div>
                <FooterComponent/>
            </FormStateProvider>
        </UserLoggedProvider>
    );
};
