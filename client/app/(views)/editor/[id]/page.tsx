"use client"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import Sortable from '@/components/Sortable';





export default function page({ params }: { params: { id: string } }) {
  const editorId = params.id;
  return (<>
    <Tabs defaultValue="account" className="w-[400px]">

      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="preview-tab">preview</TabsTrigger>
        <TabsTrigger value="edit-tab">edit</TabsTrigger>
        <TabsTrigger value="setting-tab">setting</TabsTrigger>
      </TabsList>

      <TabsContent value="preview-tab">
        <div className="card">
          {/* <Preview:data="currentSlide"></Preview:data=> */}
        </div>
      </TabsContent>
      <TabsContent value="edit-tab">
        <div className="card">
          {/* <EditTab /> */}
          <div className="card">
            <Sortable />

          </div>
        </div>
      </TabsContent>
      <TabsContent value="setting-tab">
        <div className="card">
          <header>
            <h1 className="inline-block text-2xl font-extrabold text-gray-900 tracking-tight ">  edit game: {editorId}</h1>
            <p className="mb-2">
              Don't have an account, sign up now it's free.
            </p>
          </header>
          <div className="space-y-2">
            <h2>setting</h2>
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
  </>
  );
}
