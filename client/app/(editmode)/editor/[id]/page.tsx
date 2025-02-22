"use client"
import React from 'react';
import { useEffect, useState } from 'react';



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// import Sortable from '@/components/Sortable';
import Preview from "@/components/Preview";
// import QuestionCreator from "@/components/QuestionCreator";

import { getTriviaWithQuestions } from '@/app/_actions/formSubmit'
import EditTab from '@/components/EditTab';
import { GameData } from "@/app/_types"

export default function Page({ params }: {
  params: Promise<{ id: number }>
}) {
  const [editorId, setEditorId] = useState<number | null>(null);

  const [fetchedGame, setFetchedGame] = useState<GameData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await params;
      setEditorId(data.id);
      const result = await getTriviaWithQuestions(editorId?.toString() || null)

      if (result) {
        setFetchedGame(result) // Pretty print the output
      } else {
        console.log(`Trivia with ID ${editorId} not found.`)
      }
    }
    fetchData();
  }, [editorId, params]);

  return (<section className="container">
    <Tabs defaultValue="edit-tab" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="edit-tab">edit</TabsTrigger>
        <TabsTrigger value="setting-tab">setting</TabsTrigger>
        <TabsTrigger value="preview-tab">preview</TabsTrigger>
      </TabsList>
      <TabsContent value="preview-tab">
        <div className="card">
          <Preview />
        </div>
      </TabsContent>
      <TabsContent value="edit-tab">
        <div className="card">
          <div className="card flex gap-12">
            {fetchedGame && <EditTab />}
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
            <div className="card font-bold">
              <span>
                Track pts:<select name="setting-track_points" id="setting-track_points">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select></span>
            </div>
            <div className="card font-bold">
              <span>
                share link:<select name="setting-share" id="setting-share">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select></span>
            </div>
            <div className="card font-bold">
              <span>
                allow late:<select name="setting-late" id="setting-late">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select></span>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>

  </section >
  );
}