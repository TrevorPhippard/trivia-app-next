"use client"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import Sortable from '@/components/Sortable';
import Preview from "@/components/Preview";
import QuestionCreator from "@/components/QuestionCreator";

export default function page({ params }: { params: { id: string } }) {
  const editorId = params.id;
  return (<section className="container">
    <Tabs defaultValue="edit-tab" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="preview-tab">preview</TabsTrigger>
        <TabsTrigger value="edit-tab">edit</TabsTrigger>
        <TabsTrigger value="setting-tab">setting</TabsTrigger>
      </TabsList>
      <TabsContent value="preview-tab">
        <div className="card">
          <Preview />
        </div>
      </TabsContent>
      <TabsContent value="edit-tab">
        <div className="card">
          {/* <EditTab /> */}
          <div className="card flex gap-12">
            <div className="w-3/12">
              <Sortable /></div>
            <div className="w-9/12">      <QuestionCreator /></div>



          </div>
        </div>
      </TabsContent>
      <TabsContent value="setting-tab">
        <div className="card">
          <header>
            <h1 className="inline-block text-2xl font-extrabold text-gray-900 tracking-tight ">  edit game: {editorId}</h1>
            <p className="mb-2">
              edit game settings.
            </p>
          </header>
          <div className="space-y-2">
            <h2 >setting</h2>
            <div className="card">Track pts: no </div>
            <div className="card">share link: no </div>
            <div className="card">api link: no </div>
            <div className="card">allow late: no </div>
            <div className="card">code: 54687 </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
    <br />
    <div className="save">
      <h4>Save Trivia </h4>
      <i>save changes and return to home to launch game</i>
      <hr />
      <button>Save</button><button> Back</button >
    </div >
  </section >
  );
}
