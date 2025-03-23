"use client"

import { Toolbar } from "@/components/toolbar"
import { useFabric } from "@/hooks/use-fabric"
import "@/app/fonts.css"

export default function HomePage() {
  const {
    canvasRef,
    setBackgroundImage,
    addText,
    addChillGuy,
    changeFontFamily,
    changeTextColor,
    flipImage,
    deleteSelectedObject,
    downloadCanvas,
    changeBackgroundColor,
    currentBackgroundColor,
    selectedTextProperties,
    toggleFilter,
    isImageSelected,
    toggleDrawingMode,
    incrementBrushSize,
    setBrushColor,
    drawingSettings,
  } = useFabric()

  return (
    <>
      <div className="px-2 space-y-10 min-h-screen items-center h-full flex-col flex justify-between">
        <div></div>
        <canvas
          ref={canvasRef}
          className="border rounded-3xl overflow-hidden "
        />
        <div className="pt-10 pb-8 space-y-5 flex items-center flex-col">
          <Toolbar
            setBackgroundImage={setBackgroundImage}
            addText={addText}
            addChillGuy={addChillGuy}
            changeFontFamily={changeFontFamily}
            changeTextColor={changeTextColor}
            flipImage={flipImage}
            deleteSelectedObject={deleteSelectedObject}
            downloadCanvas={downloadCanvas}
            changeBackgroundColor={changeBackgroundColor}
            currentBackgroundColor={currentBackgroundColor}
            selectedTextProperties={selectedTextProperties}
            toggleFilter={toggleFilter}
            isImageSelected={isImageSelected}
            toggleDrawingMode={toggleDrawingMode}
            drawingSettings={drawingSettings}
            incrementBrushSize={incrementBrushSize}
            setBrushColor={setBrushColor}
          />
          <div className="flex flex-col justify-center text-center items-center text-sm md:flex-row">
            <a
              className="text-balance underline leading-loose text-muted-foreground  font-medium hover:text-blue-700"
              href="https://github.com/Coder-philosopher"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built by Abdullah 
            </a><span className="text-balance leading-loose text-muted-foreground  font-medium before:content-['---']"> Check Github for more Info.</span>
          </div>
        </div>
      </div>
    </>
  )
}
