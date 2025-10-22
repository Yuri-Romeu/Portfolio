import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { ChartContainer, StatusText, ChartTitle, ChartWrapper } from './styles';
import { useGetLanguagesPromiseQuery } from '../../services/api';

interface LinguagensChartProps {
     username: string;
     project: { name: string };
}

interface LanguageData {
     name: string;
     value: number;
}

const LinguagensChart: React.FC<LinguagensChartProps> = ({ username, project }) => {
     const {
          data: langs,
          isLoading,
          isError,
     } = useGetLanguagesPromiseQuery({
          username,
          project: project.name,
     });

     let data: LanguageData[] = [];
     if (langs) {
          const langsAsRecord = langs as unknown as Record<string, number>;

          const total = Object.values(langsAsRecord).reduce((acc, val) => acc + val, 0);

          data = Object.entries(langsAsRecord).map(([name, value]) => ({
               name,
               value: parseFloat(((value / total) * 100).toFixed(1)),
          }));
     }

     const COLORS = ['#FFD43B', '#61DAFB', '#E34C26', '#563D7C', '#68A063', '#F0DB4F'];

     if (isLoading) return <StatusText>Carregando linguagens...</StatusText>;
     if (isError) return <StatusText error>Erro ao carregar dados.</StatusText>;

     return (
          <ChartContainer>
               <ChartTitle>Linguagens — {project.name}</ChartTitle>

               {data.length > 0 ? (
                    <ChartWrapper>
                         <ResponsiveContainer width="100%" height={80}>
                              <BarChart layout="vertical" data={data}>
                                   <XAxis type="number" hide />
                                   <YAxis dataKey="name" type="category" width={80} />
                                   <Tooltip formatter={v => `${v}%`} />
                                   <Bar barSize={16} dataKey="value" radius={[2, 2, 2, 2]}>
                                        {data.map((_, index) => (
                                             <Cell
                                                  key={index}
                                                  fill={COLORS[index % COLORS.length]}
                                             />
                                        ))}
                                   </Bar>
                              </BarChart>
                         </ResponsiveContainer>
                    </ChartWrapper>
               ) : (
                    <StatusText>Nenhuma linguagem encontrada.</StatusText>
               )}
          </ChartContainer>
     );
};

export default LinguagensChart;
