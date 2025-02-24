"use client"
import React from 'react';
import { useEffect, useState } from 'react';



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Preview from "@/components/Preview";
// import QuestionCreator from "@/components/QuestionCreator";

import { getTriviaWithQuestions } from '@/app/_actions/formSubmit'
import EditTab from '@/components/EditTab';
import { GameData } from "@/app/_types"
import { useMainStore } from '@/store';

export default function Page({ params }: {
  params: Promise<{ id: string }>
}) {
  const [editorId, setEditorId] = useState<string>('');
  const [gameData, setGameData] = useState<GameData>();
  const [fetchedGame, setFetchedGame] = useState<GameData | null>(null);

  const slideSelect = useMainStore((state) => state.slideSelect)
  const setQuizData = useMainStore((state) => state.setQuizData)

  async function fetchData() {
    const data = await params;
    setEditorId(data.id);
    const result = await getTriviaWithQuestions(editorId?.toString() || null)
    if (result) {
      setGameData(result);
      setFetchedGame(result);
      setQuizData(result);
    } else {
      console.log(`Trivia with ID ${editorId} not found.`)
    }
  }

  useEffect(() => {

    fetchData();
  }, [editorId, params]);

  return (<section className="container">
    <h1 className='text-3xl mb-5 border-b-2'>Game ID: {editorId}, Slides:{slideSelect} </h1>
    <div>
    </div>
    <Tabs defaultValue="edit-tab" >
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
      <TabsContent value="edit-tab" className='flex'>
        {fetchedGame &&
          <EditTab
            id={Number(gameData.id)}
            slideLength={Number(gameData?.Question.length)}
            questions={gameData?.Question[slideSelect]}
          />}

      </TabsContent>
      <TabsContent value="setting-tab">
        <div className="card">
          <header>
            <h1 className="inline-block text-2xl font-extrabold text-gray-900 tracking-tight "> Play Settings</h1>

          </header>
          <div className="space-y-2">
            <h2 >edit how the game is shared and runs</h2>
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