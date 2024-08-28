import typia from "typia";
import type { OBSRequestTypes } from "obs-websocket-js";
import { SimplifyDeep } from "type-fest";
type T = SimplifyDeep<OBSRequestTypes[keyof OBSRequestTypes]>;
export const isRequestType = (() => { const $iv1 = new Set(["GetPersistentData", "SetPersistentData", "GetSceneCollectionList", "SetCurrentSceneCollection", "CreateSceneCollection", "GetProfileList", "SetCurrentProfile", "CreateProfile", "RemoveProfile", "GetProfileParameter", "SetProfileParameter", "GetVideoSettings", "SetVideoSettings", "GetStreamServiceSettings", "SetStreamServiceSettings", "GetRecordDirectory", "SetRecordDirectory", "GetSourceFilterKindList", "GetSourceFilterList", "GetSourceFilterDefaultSettings", "CreateSourceFilter", "RemoveSourceFilter", "SetSourceFilterName", "GetSourceFilter", "SetSourceFilterIndex", "SetSourceFilterSettings", "SetSourceFilterEnabled", "GetVersion", "GetStats", "BroadcastCustomEvent", "CallVendorRequest", "GetHotkeyList", "TriggerHotkeyByName", "TriggerHotkeyByKeySequence", "Sleep", "GetInputList", "GetInputKindList", "GetSpecialInputs", "CreateInput", "RemoveInput", "SetInputName", "GetInputDefaultSettings", "GetInputSettings", "SetInputSettings", "GetInputMute", "SetInputMute", "ToggleInputMute", "GetInputVolume", "SetInputVolume", "GetInputAudioBalance", "SetInputAudioBalance", "GetInputAudioSyncOffset", "SetInputAudioSyncOffset", "GetInputAudioMonitorType", "SetInputAudioMonitorType", "GetInputAudioTracks", "SetInputAudioTracks", "GetInputPropertiesListPropertyItems", "PressInputPropertiesButton", "GetMediaInputStatus", "SetMediaInputCursor", "OffsetMediaInputCursor", "TriggerMediaInputAction", "GetVirtualCamStatus", "ToggleVirtualCam", "StartVirtualCam", "StopVirtualCam", "GetReplayBufferStatus", "ToggleReplayBuffer", "StartReplayBuffer", "StopReplayBuffer", "SaveReplayBuffer", "GetLastReplayBufferReplay", "GetOutputList", "GetOutputStatus", "ToggleOutput", "StartOutput", "StopOutput", "GetOutputSettings", "SetOutputSettings", "GetRecordStatus", "ToggleRecord", "StartRecord", "StopRecord", "ToggleRecordPause", "PauseRecord", "ResumeRecord", "SplitRecordFile", "CreateRecordChapter", "GetSceneItemList", "GetGroupSceneItemList", "GetSceneItemId", "GetSceneItemSource", "CreateSceneItem", "RemoveSceneItem", "DuplicateSceneItem", "GetSceneItemTransform", "SetSceneItemTransform", "GetSceneItemEnabled", "SetSceneItemEnabled", "GetSceneItemLocked", "SetSceneItemLocked", "GetSceneItemIndex", "SetSceneItemIndex", "GetSceneItemBlendMode", "SetSceneItemBlendMode", "GetSceneList", "GetGroupList", "GetCurrentProgramScene", "SetCurrentProgramScene", "GetCurrentPreviewScene", "SetCurrentPreviewScene", "CreateScene", "RemoveScene", "SetSceneName", "GetSceneSceneTransitionOverride", "SetSceneSceneTransitionOverride", "GetSourceActive", "GetSourceScreenshot", "SaveSourceScreenshot", "GetStreamStatus", "ToggleStream", "StartStream", "StopStream", "SendStreamCaption", "GetTransitionKindList", "GetSceneTransitionList", "GetCurrentSceneTransition", "SetCurrentSceneTransition", "SetCurrentSceneTransitionDuration", "SetCurrentSceneTransitionSettings", "GetCurrentSceneTransitionCursor", "TriggerStudioModeTransition", "SetTBarPosition", "GetStudioModeEnabled", "SetStudioModeEnabled", "OpenInputPropertiesDialog", "OpenInputFiltersDialog", "OpenInputInteractDialog", "GetMonitorList", "OpenVideoMixProjector", "OpenSourceProjector"]); return (input: any): input is keyof OBSRequestTypes => true === $iv1.has(input); })();
export const isRequestData = (() => { const $io0 = (input: any): boolean => "string" === typeof input.realm && "string" === typeof input.slotName; const $io1 = (input: any): boolean => "string" === typeof input.realm && "string" === typeof input.slotName && true; const $io2 = (input: any): boolean => "string" === typeof input.sceneCollectionName; const $io3 = (input: any): boolean => "string" === typeof input.sceneCollectionName; const $io4 = (input: any): boolean => "string" === typeof input.profileName; const $io5 = (input: any): boolean => "string" === typeof input.profileName; const $io6 = (input: any): boolean => "string" === typeof input.profileName; const $io7 = (input: any): boolean => "string" === typeof input.parameterCategory && "string" === typeof input.parameterName; const $io8 = (input: any): boolean => "string" === typeof input.parameterCategory && "string" === typeof input.parameterName && "string" === typeof input.parameterValue; const $io9 = (input: any): boolean => (undefined === input.fpsNumerator || "number" === typeof input.fpsNumerator) && (undefined === input.fpsDenominator || "number" === typeof input.fpsDenominator) && (undefined === input.baseWidth || "number" === typeof input.baseWidth) && (undefined === input.baseHeight || "number" === typeof input.baseHeight) && (undefined === input.outputWidth || "number" === typeof input.outputWidth) && (undefined === input.outputHeight || "number" === typeof input.outputHeight); const $io10 = (input: any): boolean => "string" === typeof input.streamServiceType && ("object" === typeof input.streamServiceSettings && null !== input.streamServiceSettings && false === Array.isArray(input.streamServiceSettings) && $io11(input.streamServiceSettings)); const $io11 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return true;
}); const $io12 = (input: any): boolean => "string" === typeof input.recordDirectory; const $io13 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid); const $io14 = (input: any): boolean => "string" === typeof input.filterKind; const $io15 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.filterName && "string" === typeof input.filterKind && (undefined === input.filterSettings || "object" === typeof input.filterSettings && null !== input.filterSettings && false === Array.isArray(input.filterSettings) && $io11(input.filterSettings)); const $io16 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.filterName; const $io17 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.filterName && "string" === typeof input.newFilterName; const $io18 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.filterName; const $io19 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.filterName && "number" === typeof input.filterIndex; const $io20 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.filterName && ("object" === typeof input.filterSettings && null !== input.filterSettings && false === Array.isArray(input.filterSettings) && $io11(input.filterSettings)) && (undefined === input.overlay || "boolean" === typeof input.overlay); const $io21 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.filterName && "boolean" === typeof input.filterEnabled; const $io22 = (input: any): boolean => "object" === typeof input.eventData && null !== input.eventData && false === Array.isArray(input.eventData) && $io11(input.eventData); const $io23 = (input: any): boolean => "string" === typeof input.vendorName && "string" === typeof input.requestType && (undefined === input.requestData || "object" === typeof input.requestData && null !== input.requestData && false === Array.isArray(input.requestData) && $io11(input.requestData)); const $io24 = (input: any): boolean => "string" === typeof input.hotkeyName && (undefined === input.contextName || "string" === typeof input.contextName); const $io25 = (input: any): boolean => (undefined === input.keyId || "string" === typeof input.keyId) && (undefined === input.keyModifiers || "object" === typeof input.keyModifiers && null !== input.keyModifiers && false === Array.isArray(input.keyModifiers) && $io26(input.keyModifiers)); const $io26 = (input: any): boolean => (undefined === input.shift || "boolean" === typeof input.shift) && (undefined === input.control || "boolean" === typeof input.control) && (undefined === input.alt || "boolean" === typeof input.alt) && (undefined === input.command || "boolean" === typeof input.command); const $io27 = (input: any): boolean => (undefined === input.sleepMillis || "number" === typeof input.sleepMillis) && (undefined === input.sleepFrames || "number" === typeof input.sleepFrames); const $io28 = (input: any): boolean => undefined === input.inputKind || "string" === typeof input.inputKind; const $io29 = (input: any): boolean => undefined === input.unversioned || "boolean" === typeof input.unversioned; const $io30 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "string" === typeof input.inputName && "string" === typeof input.inputKind && (undefined === input.inputSettings || "object" === typeof input.inputSettings && null !== input.inputSettings && false === Array.isArray(input.inputSettings) && $io11(input.inputSettings)) && (undefined === input.sceneItemEnabled || "boolean" === typeof input.sceneItemEnabled); const $io31 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io32 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "string" === typeof input.newInputName; const $io33 = (input: any): boolean => "string" === typeof input.inputKind; const $io34 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io35 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && ("object" === typeof input.inputSettings && null !== input.inputSettings && false === Array.isArray(input.inputSettings) && $io11(input.inputSettings)) && (undefined === input.overlay || "boolean" === typeof input.overlay); const $io36 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io37 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "boolean" === typeof input.inputMuted; const $io38 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io39 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io40 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && (undefined === input.inputVolumeMul || "number" === typeof input.inputVolumeMul) && (undefined === input.inputVolumeDb || "number" === typeof input.inputVolumeDb); const $io41 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io42 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "number" === typeof input.inputAudioBalance; const $io43 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io44 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "number" === typeof input.inputAudioSyncOffset; const $io45 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io46 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "string" === typeof input.monitorType; const $io47 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io48 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && ("object" === typeof input.inputAudioTracks && null !== input.inputAudioTracks && false === Array.isArray(input.inputAudioTracks) && $io11(input.inputAudioTracks)); const $io49 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "string" === typeof input.propertyName; const $io50 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "string" === typeof input.propertyName; const $io51 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io52 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "number" === typeof input.mediaCursor; const $io53 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "number" === typeof input.mediaCursorOffset; const $io54 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid) && "string" === typeof input.mediaAction; const $io55 = (input: any): boolean => "string" === typeof input.outputName; const $io56 = (input: any): boolean => "string" === typeof input.outputName; const $io57 = (input: any): boolean => "string" === typeof input.outputName; const $io58 = (input: any): boolean => "string" === typeof input.outputName; const $io59 = (input: any): boolean => "string" === typeof input.outputName; const $io60 = (input: any): boolean => "string" === typeof input.outputName && ("object" === typeof input.outputSettings && null !== input.outputSettings && false === Array.isArray(input.outputSettings) && $io11(input.outputSettings)); const $io61 = (input: any): boolean => undefined === input.chapterName || "string" === typeof input.chapterName; const $io62 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid); const $io63 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid); const $io64 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "string" === typeof input.sourceName && (undefined === input.searchOffset || "number" === typeof input.searchOffset); const $io65 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId; const $io66 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && (undefined === input.sceneItemEnabled || "boolean" === typeof input.sceneItemEnabled); const $io67 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId; const $io68 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId && (undefined === input.destinationSceneName || "string" === typeof input.destinationSceneName) && (undefined === input.destinationSceneUuid || "string" === typeof input.destinationSceneUuid); const $io69 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId; const $io70 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId && ("object" === typeof input.sceneItemTransform && null !== input.sceneItemTransform && false === Array.isArray(input.sceneItemTransform) && $io11(input.sceneItemTransform)); const $io71 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId; const $io72 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId && "boolean" === typeof input.sceneItemEnabled; const $io73 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId; const $io74 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId && "boolean" === typeof input.sceneItemLocked; const $io75 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId; const $io76 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId && "number" === typeof input.sceneItemIndex; const $io77 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId; const $io78 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "number" === typeof input.sceneItemId && "string" === typeof input.sceneItemBlendMode; const $io79 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid); const $io80 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid); const $io81 = (input: any): boolean => "string" === typeof input.sceneName; const $io82 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid); const $io83 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && "string" === typeof input.newSceneName; const $io84 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid); const $io85 = (input: any): boolean => (undefined === input.sceneName || "string" === typeof input.sceneName) && (undefined === input.sceneUuid || "string" === typeof input.sceneUuid) && (undefined === input.transitionName || "string" === typeof input.transitionName) && (undefined === input.transitionDuration || "number" === typeof input.transitionDuration); const $io86 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid); const $io87 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.imageFormat && (undefined === input.imageWidth || "number" === typeof input.imageWidth) && (undefined === input.imageHeight || "number" === typeof input.imageHeight) && (undefined === input.imageCompressionQuality || "number" === typeof input.imageCompressionQuality); const $io88 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && "string" === typeof input.imageFormat && "string" === typeof input.imageFilePath && (undefined === input.imageWidth || "number" === typeof input.imageWidth) && (undefined === input.imageHeight || "number" === typeof input.imageHeight) && (undefined === input.imageCompressionQuality || "number" === typeof input.imageCompressionQuality); const $io89 = (input: any): boolean => "string" === typeof input.captionText; const $io90 = (input: any): boolean => "string" === typeof input.transitionName; const $io91 = (input: any): boolean => "number" === typeof input.transitionDuration; const $io92 = (input: any): boolean => "object" === typeof input.transitionSettings && null !== input.transitionSettings && false === Array.isArray(input.transitionSettings) && $io11(input.transitionSettings) && (undefined === input.overlay || "boolean" === typeof input.overlay); const $io93 = (input: any): boolean => "number" === typeof input.position && (undefined === input.release || "boolean" === typeof input.release); const $io94 = (input: any): boolean => "boolean" === typeof input.studioModeEnabled; const $io95 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io96 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io97 = (input: any): boolean => (undefined === input.inputName || "string" === typeof input.inputName) && (undefined === input.inputUuid || "string" === typeof input.inputUuid); const $io98 = (input: any): boolean => "string" === typeof input.videoMixType && (undefined === input.monitorIndex || "number" === typeof input.monitorIndex) && (undefined === input.projectorGeometry || "string" === typeof input.projectorGeometry); const $io99 = (input: any): boolean => (undefined === input.sourceName || "string" === typeof input.sourceName) && (undefined === input.sourceUuid || "string" === typeof input.sourceUuid) && (undefined === input.monitorIndex || "number" === typeof input.monitorIndex) && (undefined === input.projectorGeometry || "string" === typeof input.projectorGeometry); const $iu0 = (input: any): any => (() => {
    if (undefined !== input.slotValue)
        return $io1(input);
    else if (undefined !== input.parameterValue)
        return $io8(input);
    else if (undefined !== input.streamServiceType)
        return $io10(input);
    else if (undefined !== input.recordDirectory)
        return $io12(input);
    else if (undefined !== input.newFilterName)
        return $io17(input);
    else if (undefined !== input.filterIndex)
        return $io19(input);
    else if (undefined !== input.filterEnabled)
        return $io21(input);
    else if (undefined !== input.eventData)
        return $io22(input);
    else if (undefined !== input.vendorName)
        return $io23(input);
    else if (undefined !== input.hotkeyName)
        return $io24(input);
    else if (undefined !== input.newInputName)
        return $io32(input);
    else if (undefined !== input.inputMuted)
        return $io37(input);
    else if (undefined !== input.inputAudioBalance)
        return $io42(input);
    else if (undefined !== input.inputAudioSyncOffset)
        return $io44(input);
    else if (undefined !== input.monitorType)
        return $io46(input);
    else if (undefined !== input.inputAudioTracks)
        return $io48(input);
    else if (undefined !== input.mediaCursor)
        return $io52(input);
    else if (undefined !== input.mediaCursorOffset)
        return $io53(input);
    else if (undefined !== input.mediaAction)
        return $io54(input);
    else if (undefined !== input.outputSettings)
        return $io60(input);
    else if (undefined !== input.sceneItemTransform)
        return $io70(input);
    else if (undefined !== input.sceneItemLocked)
        return $io74(input);
    else if (undefined !== input.sceneItemIndex)
        return $io76(input);
    else if (undefined !== input.sceneItemBlendMode)
        return $io78(input);
    else if (undefined !== input.newSceneName)
        return $io83(input);
    else if (undefined !== input.imageFilePath)
        return $io88(input);
    else if (undefined !== input.captionText)
        return $io89(input);
    else if (undefined !== input.transitionSettings)
        return $io92(input);
    else if (undefined !== input.position)
        return $io93(input);
    else if (undefined !== input.studioModeEnabled)
        return $io94(input);
    else if (undefined !== input.videoMixType)
        return $io98(input);
    else
        return (() => {
            if (undefined !== input.realm)
                return $io0(input);
            else if (undefined !== input.parameterCategory)
                return $io7(input);
            else if (undefined !== input.imageFormat)
                return $io87(input);
            else
                return (() => {
                    if ($io3(input))
                        return $io3(input);
                    if ($io2(input))
                        return $io2(input);
                    if ($io6(input))
                        return $io6(input);
                    if ($io5(input))
                        return $io5(input);
                    if ($io4(input))
                        return $io4(input);
                    if ($io9(input))
                        return $io9(input);
                    if ($io13(input))
                        return $io13(input);
                    if ($io14(input))
                        return $io14(input);
                    if ($io15(input))
                        return $io15(input);
                    if ($io18(input))
                        return $io18(input);
                    if ($io16(input))
                        return $io16(input);
                    if ($io20(input))
                        return $io20(input);
                    if ($io25(input))
                        return $io25(input);
                    if ($io27(input))
                        return $io27(input);
                    if ($io28(input))
                        return $io28(input);
                    if ($io29(input))
                        return $io29(input);
                    if ($io30(input))
                        return $io30(input);
                    if ($io41(input))
                        return $io41(input);
                    if ($io31(input))
                        return $io31(input);
                    if ($io33(input))
                        return $io33(input);
                    if ($io47(input))
                        return $io47(input);
                    if ($io43(input))
                        return $io43(input);
                    if ($io39(input))
                        return $io39(input);
                    if ($io38(input))
                        return $io38(input);
                    if ($io36(input))
                        return $io36(input);
                    if ($io34(input))
                        return $io34(input);
                    if ($io35(input))
                        return $io35(input);
                    if ($io40(input))
                        return $io40(input);
                    if ($io45(input))
                        return $io45(input);
                    if ($io50(input))
                        return $io50(input);
                    if ($io49(input))
                        return $io49(input);
                    if ($io51(input))
                        return $io51(input);
                    if ($io59(input))
                        return $io59(input);
                    if ($io58(input))
                        return $io58(input);
                    if ($io57(input))
                        return $io57(input);
                    if ($io56(input))
                        return $io56(input);
                    if ($io55(input))
                        return $io55(input);
                    if ($io61(input))
                        return $io61(input);
                    if ($io63(input))
                        return $io63(input);
                    if ($io62(input))
                        return $io62(input);
                    if ($io64(input))
                        return $io64(input);
                    if ($io75(input))
                        return $io75(input);
                    if ($io73(input))
                        return $io73(input);
                    if ($io71(input))
                        return $io71(input);
                    if ($io69(input))
                        return $io69(input);
                    if ($io67(input))
                        return $io67(input);
                    if ($io65(input))
                        return $io65(input);
                    if ($io66(input))
                        return $io66(input);
                    if ($io68(input))
                        return $io68(input);
                    if ($io72(input))
                        return $io72(input);
                    if ($io77(input))
                        return $io77(input);
                    if ($io84(input))
                        return $io84(input);
                    if ($io82(input))
                        return $io82(input);
                    if ($io80(input))
                        return $io80(input);
                    if ($io79(input))
                        return $io79(input);
                    if ($io81(input))
                        return $io81(input);
                    if ($io85(input))
                        return $io85(input);
                    if ($io86(input))
                        return $io86(input);
                    if ($io90(input))
                        return $io90(input);
                    if ($io91(input))
                        return $io91(input);
                    if ($io97(input))
                        return $io97(input);
                    if ($io96(input))
                        return $io96(input);
                    if ($io95(input))
                        return $io95(input);
                    if ($io99(input))
                        return $io99(input);
                    return false;
                })();
        })();
})(); return (input: any): input is T => "object" === typeof input && null !== input && false === Array.isArray(input) && $iu0(input); })();
