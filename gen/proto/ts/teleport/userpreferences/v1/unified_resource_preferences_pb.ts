/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter eslint_disable,add_pb_suffix,server_grpc1,ts_nocheck
// @generated from protobuf file "teleport/userpreferences/v1/unified_resource_preferences.proto" (package "teleport.userpreferences.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// Copyright 2023 Gravitational, Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * UnifiedResourcePreferences are preferences used in the Unified Resource web UI
 *
 * @generated from protobuf message teleport.userpreferences.v1.UnifiedResourcePreferences
 */
export interface UnifiedResourcePreferences {
    /**
     * default_tab is the default tab selected in the unified resource web UI
     *
     * @generated from protobuf field: teleport.userpreferences.v1.DefaultTab default_tab = 1;
     */
    defaultTab: DefaultTab;
    /**
     * view_mode is the view mode selected in the unified resource Web UI
     *
     * @generated from protobuf field: teleport.userpreferences.v1.ViewMode view_mode = 2;
     */
    viewMode: ViewMode;
    /**
     * labels_view_mode is whether the labels for resources should all be collapsed or expanded in the unified resource Web UI list view.
     *
     * @generated from protobuf field: teleport.userpreferences.v1.LabelsViewMode labels_view_mode = 3;
     */
    labelsViewMode: LabelsViewMode;
}
/**
 * DefaultTab is the default tab selected in the unified resource web UI
 *
 * @generated from protobuf enum teleport.userpreferences.v1.DefaultTab
 */
export enum DefaultTab {
    /**
     * @generated from protobuf enum value: DEFAULT_TAB_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * ALL is all resources
     *
     * @generated from protobuf enum value: DEFAULT_TAB_ALL = 1;
     */
    ALL = 1,
    /**
     * PINNED is only pinned resources
     *
     * @generated from protobuf enum value: DEFAULT_TAB_PINNED = 2;
     */
    PINNED = 2
}
/**
 * ViewMode is the view mode selected in the unified resource Web UI
 *
 * @generated from protobuf enum teleport.userpreferences.v1.ViewMode
 */
export enum ViewMode {
    /**
     * @generated from protobuf enum value: VIEW_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * CARD is the card view
     *
     * @generated from protobuf enum value: VIEW_MODE_CARD = 1;
     */
    CARD = 1,
    /**
     * LIST is the list view
     *
     * @generated from protobuf enum value: VIEW_MODE_LIST = 2;
     */
    LIST = 2
}
/**
 * * LabelsViewMode is whether the labels for resources should all be collapsed or expanded. This only applies to the list view.
 *
 * @generated from protobuf enum teleport.userpreferences.v1.LabelsViewMode
 */
export enum LabelsViewMode {
    /**
     * @generated from protobuf enum value: LABELS_VIEW_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * EXPANDED is the expanded state which shows all labels for every resource.
     *
     * @generated from protobuf enum value: LABELS_VIEW_MODE_EXPANDED = 1;
     */
    EXPANDED = 1,
    /**
     * COLLAPSED is the collapsed state which hides all labels for every resource.
     *
     * @generated from protobuf enum value: LABELS_VIEW_MODE_COLLAPSED = 2;
     */
    COLLAPSED = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class UnifiedResourcePreferences$Type extends MessageType<UnifiedResourcePreferences> {
    constructor() {
        super("teleport.userpreferences.v1.UnifiedResourcePreferences", [
            { no: 1, name: "default_tab", kind: "enum", T: () => ["teleport.userpreferences.v1.DefaultTab", DefaultTab, "DEFAULT_TAB_"] },
            { no: 2, name: "view_mode", kind: "enum", T: () => ["teleport.userpreferences.v1.ViewMode", ViewMode, "VIEW_MODE_"] },
            { no: 3, name: "labels_view_mode", kind: "enum", T: () => ["teleport.userpreferences.v1.LabelsViewMode", LabelsViewMode, "LABELS_VIEW_MODE_"] }
        ]);
    }
    create(value?: PartialMessage<UnifiedResourcePreferences>): UnifiedResourcePreferences {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.defaultTab = 0;
        message.viewMode = 0;
        message.labelsViewMode = 0;
        if (value !== undefined)
            reflectionMergePartial<UnifiedResourcePreferences>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UnifiedResourcePreferences): UnifiedResourcePreferences {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* teleport.userpreferences.v1.DefaultTab default_tab */ 1:
                    message.defaultTab = reader.int32();
                    break;
                case /* teleport.userpreferences.v1.ViewMode view_mode */ 2:
                    message.viewMode = reader.int32();
                    break;
                case /* teleport.userpreferences.v1.LabelsViewMode labels_view_mode */ 3:
                    message.labelsViewMode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UnifiedResourcePreferences, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* teleport.userpreferences.v1.DefaultTab default_tab = 1; */
        if (message.defaultTab !== 0)
            writer.tag(1, WireType.Varint).int32(message.defaultTab);
        /* teleport.userpreferences.v1.ViewMode view_mode = 2; */
        if (message.viewMode !== 0)
            writer.tag(2, WireType.Varint).int32(message.viewMode);
        /* teleport.userpreferences.v1.LabelsViewMode labels_view_mode = 3; */
        if (message.labelsViewMode !== 0)
            writer.tag(3, WireType.Varint).int32(message.labelsViewMode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message teleport.userpreferences.v1.UnifiedResourcePreferences
 */
export const UnifiedResourcePreferences = new UnifiedResourcePreferences$Type();
