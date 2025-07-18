```
graph TD
    envio_contrato["Inicio - Envío de contrato"]

    %% Piso Completo
    envio_contrato --> piso_completo["Piso completo"]

    subgraph Documentos Piso Completo
        pc1["1. Contrato Personal Housing - Inquilinos"]
        pc2["2. Contrato de Arrendamiento - Inquilinos y propietario"]
        pc3["3. Resolución Anticipada - Inquilinos y propietario"]
        pc4["4. Documento de Aval - Avalistas"]
        pc5["5. Circular Mantenimiento Vivienda - Inquilinos"]
        pc6["6. Tarifa de Servicios - Inquilinos"]
        pc7["7. Compromiso Baja Padrón - Inquilinos"]
        pc8["8. Inventario Fotográfico - Inquilinos"]
        pc9["9. Inventario Descriptivo - Inquilinos"]
    end

    piso_completo --> correos_pc["Correos enviados - Piso completo"]
    subgraph Correos Piso Completo
        pc_email1["Correo 1: Inquilinos y propietario"]
        pc_email1 --> pc_email1_doc1["Contrato de Arrendamiento"]
        pc_email1 --> pc_email1_doc2["Resolución Anticipada"]

        pc_email2["Correo 2: Inquilinos"]
        pc_email2 --> pc_email2_doc1["Contrato Personal Housing"]
        pc_email2 --> pc_email2_doc2["Circular Mantenimiento"]
        pc_email2 --> pc_email2_doc3["Tarifa de Servicios"]
        pc_email2 --> pc_email2_doc4["Compromiso Baja Padrón"]
        pc_email2 --> pc_email2_doc5["Inventario Descriptivo"]
        pc_email2 --> pc_email2_doc6["Inventario Fotográfico"]

        pc_email3["Correo 3: Avalistas (si aplica)"]
        pc_email3 --> pc_email3_doc1["Documento de Aval"]
    end

    %% Habitaciones
    envio_contrato --> habitaciones["Alquiler por habitaciones"]

    subgraph Documentos Habitaciones
        hab1["1. Contrato Personal Housing - Inquilinos"]
        hab2["2. Contrato de Arrendamiento - Inquilinos y propietario"]
        hab3["3. Documento de Aval - Avalistas"]
        hab4["4. Compromiso Baja Padrón - Inquilinos"]
        hab5["5. Normas de Convivencia - Inquilinos"]
        hab6["6. Penalizaciones - Inquilinos"]
        hab7["7. Tarifa de Servicios - Inquilinos"]
        hab8["8. Inventario Fotográfico - Inquilinos"]
        hab9["9. Inventario Descriptivo - Inquilinos"]
    end

    habitaciones --> correos_hab["Correos enviados - Habitaciones"]
    subgraph Correos Habitaciones
        hab_email1["Correo 1: Inquilinos"]
        hab_email1 --> hab_email1_doc1["Contrato Personal Housing"]
        hab_email1 --> hab_email1_doc2["Contrato de Arrendamiento"]
        hab_email1 --> hab_email1_doc3["Compromiso Baja Padrón"]
        hab_email1 --> hab_email1_doc4["Normas de Convivencia"]
        hab_email1 --> hab_email1_doc5["Penalizaciones"]
        hab_email1 --> hab_email1_doc6["Tarifa de Servicios"]
        hab_email1 --> hab_email1_doc7["Inventario Descriptivo"]
        hab_email1 --> hab_email1_doc8["Inventario Fotográfico"]

        hab_email2["Correo 2: Avalistas (si aplica)"]
        hab_email2 --> hab_email2_doc1["Documento de Aval"]
    end

```
